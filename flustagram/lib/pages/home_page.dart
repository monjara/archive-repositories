import 'package:flustagram/constant/story_json.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return getBody();
  }

  Widget getBody() {
    return Column(
      children: <Widget>[
        Container(
          width: 65,
          height: 65,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            image: DecorationImage(image:
                NetworkImage(stories[0]['img'],),fit: BoxFit.cover
            )
          ),
        )
      ],
    );
  }
}
