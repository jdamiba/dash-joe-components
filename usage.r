library(dash)
library(dashHtmlComponents)
library(dashJoeComponents)


app <- Dash$new()

app$layout(
  htmlDiv(
    list(
      dccGame()
    )
  )
)

app$run_server()
