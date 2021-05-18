import 'package:flutter/material.dart';

Widget AppBarMain(BuildContext context) {
  return AppBar(
    centerTitle: true,
    backgroundColor: Colors.black,
    title: Text(
      "Simcha",
      style: TextStyle(
        fontFamily: 'Billabong',
        fontSize: 38,
      ),
    ),
  );
}

InputDecoration textFieldInputDecoration(String hintText) {
  return InputDecoration(
    hintText: hintText,
    focusedBorder:
        UnderlineInputBorder(borderSide: BorderSide(color: Colors.black)),
  );
}

Container radiusButtonForm(BuildContext context, String text, Color backgroundColor, Color fontColor, [Color borderColor = Colors.black]){
  return Container(
    alignment: Alignment.center,
    width: MediaQuery.of(context).size.width,
    padding: EdgeInsets.symmetric(vertical: 18),
    decoration: BoxDecoration(
      border: Border.all(color: borderColor),
      gradient: LinearGradient(colors: [
        backgroundColor,
        backgroundColor,
      ]),
      borderRadius: BorderRadius.circular(30)),
    child: Text(
      text,
      style: TextStyle(color: fontColor, fontSize: 20),
    ),
  );
}
