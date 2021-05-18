import 'package:flutter/material.dart';
import 'package:simcha/widgets/widget.dart';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarMain(context),
      body: Container(
        alignment: Alignment.bottomCenter,
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                cursorColor: Colors.black,
                decoration: textFieldInputDecoration("E-mail"),
              ),
              SizedBox(height: 16,),
              TextField(
                cursorColor: Colors.black,
                decoration: textFieldInputDecoration("password"),
              ),
              SizedBox(height: 16,),
              Container(
                alignment: Alignment.centerRight,
                child: Container(
                  padding: EdgeInsets.symmetric(horizontal: 16, vertical: 20),
                  child: Text("Forgot password?",),
                ),
              ),
              SizedBox(height: 16,),
              radiusButtonForm(context, "Sign In", Colors.black, Colors.white),
              SizedBox(height: 16,),
              radiusButtonForm(context, "Sign In with Google", Colors.white, Colors.black),
              SizedBox(height: 16,),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Don't have account? ",style: TextStyle(color: Colors.black),),
                  Text("Register now",style: TextStyle(color: Colors.black, decoration: TextDecoration.underline),),
                ],
              ), 
              SizedBox(height: 70,),
            ],
          ),
        ),
      ),
    );
  }
}