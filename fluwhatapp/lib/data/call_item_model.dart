import 'package:flutter/material.dart';

class CallItemModel {
  final String name;
  final String time;
  final String avatarUrl;
  final Color colorItem;
  CallItemModel({this.name, this.time, this.avatarUrl, this.colorItem});
}


List<CallItemModel> callItemData = [
  new CallItemModel(
      name: "Mike Kemi",
      time: "September 12, 15:30 AM",
      avatarUrl:
      "https://i.ibb.co/54Vqkz8/IMG-20190714-123654.jpg",
      colorItem: Colors.red),
  new CallItemModel(
      name: "Mike Mike",
      time: "September 12, 15:30 AM",
      avatarUrl:
      "https://i.ibb.co/54Vqkz8/IMG-20190714-123654.jpg",
      colorItem: Colors.green),
  new CallItemModel(
      name: "Mike Kemi",
      time: "September 12, 15:30 AM",
      avatarUrl:
      "https://i.ibb.co/54Vqkz8/IMG-20190714-123654.jpg",
      colorItem: Colors.red),
  new CallItemModel(
      name: "Deven",
      time: "September 12, 15:30 AM",
      avatarUrl:
      "https://i.ibb.co/54Vqkz8/IMG-20190714-123654.jpg",
      colorItem: Colors.green),
  new CallItemModel(
      name: "Flutter",
      time: "September 12, 15:30 AM",
      avatarUrl:
      "https://i.ibb.co/54Vqkz8/IMG-20190714-123654.jpg",
      colorItem: Colors.red),
  new CallItemModel(
      name: "Mark Zuckerberg",
      time: "September 12, 15:30 AM",
      avatarUrl:
      "https://i.ibb.co/54Vqkz8/IMG-20190714-123654.jpg",
      colorItem: Colors.green),
];