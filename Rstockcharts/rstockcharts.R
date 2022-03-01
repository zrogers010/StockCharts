library(shiny)
#library(shinydashboard)
library(quantmod)

today <- Sys.Date()
ui <- navbarPage(
  "R Stock Charts",
  tabPanel("Charts",
           fluidRow(
             column(width = 9,
                    box(width = NULL, solidHeader = TRUE,
                        plotOutput("chart")
                    )
                    ,
                    box(width = NULL, solidHeader = TRUE,
                        h3("ASDF")
                        #leafletOutput("busmap", height = 500)
                    )
                    #box(width = NULL,
                    #uiOutput("numVehiclesTable")
                    #)
             ),
             column(width = 3,
                    box(width = NULL, status = "warning",
                        h3('Chart Controls'),
                        textInput(label="Enter Stock Symbol:", inputId="symbol", "AAPL"),
                        dateInput(label="Starting Date", inputId="startDate", min="2008-01-01", max=today-30, today-90),
                        dateInput(label="Ending Date", inputId="endDate", min="2008-03-01", max=today, today),
                        #checkboxGroupInput(label=" Add Moving Avg: ", inputId="ma", choices=c("30 Day"=1, "20 Day"=2),
                        hr(),
                        radioButtons(label="Chart Indicators", input="chartIndicators", choices=c("Simple Moving Average"=1, "Bollinger Bands"=2, "Relative Strength Indicator"=3, "MACD"=4)),
                        submitButton("Get Chart")
                    )
             )
           )
  ),
  tabPanel("Options",
           dataTableOutput('options')
  ),
  tabPanel("News")
)


server <- function(input, output) { 
  #s <- input$symbol
  #print(s)
  #output$options <- renderTable({
  #  optionsData <- getOptions(input$symbol)
  #})
  output$options <- renderDataTable(getOptions(input$symbol)$calls)
  output$chart <- renderPlot({
    s <- input$symbol
    q <- getQuotes(input$symbol, input$startDate, input$endDate)
    plotQuotes(input$symbol, input$startDate, input$endDate)
    # Radio Buttons
    
    if(input$chartIndicators == 1) {
      reChart(q, name=toupper(s), type="candles", TA="addVo(); addSMA()",
                  theme = chartTheme("black",  up.col="green", down.col="red")
                  #type = c("auto", "candlesticks", "matchsticks", "bars","line"), 
                  #subset = NULL,
                  #show.grid = TRUE, 
                  
                  )
    }
    
    if(input$chartIndicators == 2) {
      candleChart(q, name=toupper(s), theme="white", type="candles", up.col="green", down.col="red",
                  , TA="addVo(); addBBands()"
      )
    }
    if(input$chartIndicators == 3) {
      candleChart(q, name=toupper(s), theme="white", type="candles", up.col="green", down.col="red",
                  , TA="addVo(); addRSI()"
      )
    }
    if(input$chartIndicators == 4) {
      candleChart(q, name=toupper(s), theme="white", type="candles", up.col="green", down.col="red",
                  , TA="addVo(); addMACD()"
      )
    }
    
  })    
}

getQuotes <- function(sym, start, end) {
  symbol <- toupper(sym)
  startDate <- start
  endDate <- end
  data <- getSymbols(symbol, src="yahoo",from=startDate, to=end, auto.assign=FALSE)
  return(data)
}

getOptions <- function(sym) {
  symbol <- toupper(sym)
  optionsData <- getOptionChain(symbol)
  print(optionsData)
}
#getOptions("AAPL")

getFundamentals <- function(sym) {
  what_metrics <- yahooQF(c("Previous Close",
                            "Open",
                            "Bid",
                            "Ask",
                            #"Day's Range",
                            #"52 week Range",
                            "Volume",
                            "Average Daily Volume",
                            "P/E Ratio",
                            "Price/EPS Estimate Next Year",
                            "PEG Ratio",
                            "Dividend Yield", 
                            "Market Capitalization",
                            "EBITDA"
                            ))
  # Not all the metrics are returned by Yahoo.
  metrics <- getQuote(paste(sym, sep="", collapse=";"), what=what_metrics)
  
  #Add tickers as the first column and remove the first column which had date stamps
  metrics <- data.frame(Symbol=tickers, metrics[,2:length(metrics)]) 
  
  #colnames(metrics) <- c("Symbol", "Revenue Multiple", "Earnings Multiple","Earnings Multiple (Forward)", "Price-to-Earnings-Growth", "Div Yield", "Market Cap", "EBITDA","Volume","Average Daily Volume")

  print(metrics)
}
#getFundamentals("AAPL")

taOptions <- "addBBands()"
plotQuotes <- function(symbol, startDate, endDate, ma=30) {
  quotes <- getQuotes(symbol, startDate, endDate)
  candleChart(quotes, name=toupper(symbol), theme="white", type="candles", up.col="green", down.col="blue",
              #, TA="addBBands()"
  )
}

shinyApp(ui, server)
