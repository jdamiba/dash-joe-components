library(dash)
library(dashHtmlComponents)
library(dashJoeComponents)


app <- Dash$new()

app$layout(
  htmlDiv(
    list(
      dccNavigation(),
      dccGame(),
      dccGame(playerOne="🕷️", playerTwo="🐦"),
    )
  )
)

app$run_server()
