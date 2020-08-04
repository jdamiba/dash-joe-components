import dash_joe_components as djc
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    djc.Game()
])

if __name__ == '__main__':
    app.run_server(debug=True)
