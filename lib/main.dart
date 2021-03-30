import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: FirstRoute()));

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
                Navigator.push(context,
                  MaterialPageRoute(builder: (context) => SecondRoute()
                  )
                );
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
                Navigator.pop(context);
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