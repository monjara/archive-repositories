import 'dart:js';

import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  initialRoute: '/first',
  routes: <String, WidgetBuilder> {
    '/first': (BuildContext context) => FirstRoute(),
    '/second': (BuildContext context) => SecondRoute(),
  }
));

class FirstRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("First Route"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/secoundRoute');
              },
              child: Text('Push Here',
                style: TextStyle(fontSize: 20),
              )
            ),
          ],
        ),
      ),
    );
  }
}

class SecondRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Secound Route"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/firstRoute');
              },
              child: Text("Push here",
                style: TextStyle(fontSize: 20),
              )
            ),
          ],
        ),
      ),
    );
  }
}