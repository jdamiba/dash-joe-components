import dash_joe_components as djc
import dash
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    djc.Navigation(),
    djc.Game(),
    djc.Game(playerOne="💃", playerTwo="🕺"),

])

if __name__ == '__main__':
    app.run_server(debug=True)
