<<<<<<< HEAD
import React from "react";
import { ScrollView, Button, Text, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { TextInput } from "react-native-paper";
import axios from "axios";
import TextTicker from "react-native-text-ticker";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, ImageBackground } from "react-native";
import * as yup from "yup";
//import { Block, Button, Card, Icon, Input, NavBar, Text } from 'galio-R';
=======
import React from 'react';
import  {ScrollView, KeyboardAvoidingView} from 'react-native'
import { Formik } from 'formik';
import { View } from 'react-native-animatable';
import { TextInput, Text, Button } from 'react-native-paper';
import axios from 'axios'
import * as yup from 'yup'
>>>>>>> 7d61d95a748fc4efb107abad1752a1a8fc9cb915

const reviewSchema = yup.object({
  Name: yup.string().strict().required(),

  Age: yup
    .number()
    .required()
    .test("is-age-<18", "you must be 18 or older", (val) => {
      return parseInt(val) > 18 && parseInt(val) < 100;
    }),

  NumberOfKidsYouCanHandel: yup
    .number()
    .required()
    .test(
      "is-numkids->0",
      "you must atleast be able to deal with one kid",
      (val) => {
        return parseInt(val) > 0 && parseInt(val) < 11;
      }
    ),

  Place: yup.string().required(),

  EducationLevel: yup.string().required(),

  HowMannyHoursYouCanWorkADay: yup
    .number()
    .required()
    .test("is-workH->1-9", "invalid number of work hours", (val) => {
      return parseInt(val) > 1 && parseInt(val) < 10;
    }),

  ExperensLevel: yup.string().required(),
});

export default function HiringForm() {
  return (
    <ScrollView>
      <View>
<<<<<<< HEAD
        <KeyboardAvoidingView behavior="position" disabled>
          <View style={styles.container}>
            <TextTicker
              style={{ fontSize: 24 }}
              duration={3000}
              loop
              bounce
              repeatSpacer={50}
              marqueeDelay={1000}
            >
              Welcome to Nany Family
            </TextTicker>
          </View>
          <View>
            <Formik
              initialValues={{
                Name: "",
                Age: "",
                Email: "",
                PhoneNumber: "",
                NumberOfKidsYouCanHandel: "",
                Place: "",
                EducationLevel: "",
                HowMannyHoursYouCanWorkADay: "",
                ExperensLevel: "",
              }}
              validationSchema={reviewSchema}
              onSubmit={(values) => {
                console.log(values);
                axios
                  .post("http://192.168.127.43:5000/HiringForm", values)
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            >
              {(props) => (
                <View>
                  {/* Name inpute */}
                  <TextInput
                    placeholder="Please enter name "
                    onChangeText={props.handleChange("Name")}
                    value={props.values.Name}
                    onBlur={props.handleBlur("Name")}
                  ></TextInput>
                  {/* Handling test for name */}
                  <Text> {props.touched.Name && props.errors.Name} </Text>

                  {/* Age input */}
                  <TextInput
                    placeholder="Please enter age"
                    onChangeText={props.handleChange("Age")}
                    value={props.values.Age}
                    onBlur={props.handleBlur("Age")}
                  ></TextInput>
                  {/* Handling test for age */}
                  <Text> {props.touched.Age /* && props.errors.Age */} </Text>

                  {/* Email input  */}
                  <TextInput
                    placeholder="Please enter email "
                    onChangeText={props.handleChange("Email")}
                    value={props.values.Email}
                    onBlur={props.handleBlur("Email")}
                  ></TextInput>
                  {/* Handling test for email */}
                  <Text> {props.touched.Email && props.errors.Email} </Text>

                  {/* PhoneNumber input */}
                  <TextInput
                    placeholder="Please enter your phone number "
                    onChangeText={props.handleChange("PhoneNumber")}
                    value={props.values.PhoneNumber}
                    onBlur={props.handleBlur("PhoneNumber")}
                  ></TextInput>
                  {/* Handling test for phonenumber */}
                  <Text>
                    {" "}
                    {props.touched.PhoneNumber && props.errors.PhoneNumber}{" "}
                  </Text>

                  {/* NumberOfKidsYouCanHandel input */}
                  <TextInput
                    placeholder="How manny kids you can work with at the same time"
                    onChangeText={props.handleChange(
                      "NumberOfKidsYouCanHandel"
                    )}
                    value={
                      props.touched.NumberOfKidsYouCanHandel &&
                      props.values.NumberOfKidsYouCanHandel
                    }
                    onBlur={props.handleBlur("NumberOfKidsYouCanHandel")}
                  ></TextInput>
                  {/* Handling test for numberOfKids   */}
                  <Text>
                    {" "}
                    {props.touched.NumberOfKidsYouCanHandel &&
                      props.errors.NumberOfKidsYouCanHandel}
                  </Text>

                  {/* Place input */}
                  <TextInput
                    placeholder="Please enter where you live "
                    onChangeText={props.handleChange("Place")}
                    value={props.values.Place}
                    onBlur={props.handleBlur("Place")}
                  ></TextInput>
                  {/* Handling test for place */}
                  <Text> {props.touched.Place && props.errors.Place} </Text>

                  {/* EducationLevel input */}
                  <TextInput
                    placeholder="Please enter your Education Level"
                    onChangeText={props.handleChange("EducationLevel")}
                    value={props.values.EducationLevel}
                    onBlur={props.handleBlur("EducationLevel")}
                  ></TextInput>
                  {/* Handling test for education lvl */}
                  <Text>
                    {" "}
                    {props.touched.EducationLevel &&
                      props.errors.EducationLevel}{" "}
                  </Text>

                  {/* HowMannyHoursYouCanWorkADay input  */}
                  <TextInput
                    placeholder="How manny hours you can work a day ?"
                    onChangeText={props.handleChange(
                      "HowMannyHoursYouCanWorkADay"
                    )}
                    value={props.values.HowMannyHoursYouCanWorkADay}
                    onBlur={props.handleBlur("HowMannyHoursYouCanWorkADay")}
                  ></TextInput>
                  {/* Handling test for number of hours */}
                  <Text>
                    {" "}
                    {props.touched.HowMannyHoursYouCanWorkADay &&
                      props.errors.HowMannyHoursYouCanWorkADay}{" "}
                  </Text>

                  {/* ExperensLevel input  */}
                  <TextInput
                    placeholder="What's your experens level ?"
                    onChangeText={props.handleChange("ExperensLevel")}
                    value={props.values.ExperensLevel}
                    onBlur={props.handleBlur("ExperensLevel")}
                  ></TextInput>
                  {/* Handling test for exp lvl */}
                  <Text>
                    {" "}
                    {props.touched.ExperensLevel &&
                      props.errors.ExperensLevel}{" "}
                  </Text>

                  {/* submit bttn  */}
                  <Button
                    title="Submit"
                    mode="contained"
                    onPress={props.handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
=======
        <Formik
          initialValues={{
            Name: "",
            Age: "",
            Email : '',
            PhoneNumber: "",
            NumberOfKidsYouCanHandel: "",
            Place: "",
            EducationLevel: "",
            HowMannyHoursYouCanWorkADay: "",
            ExperensLevel: "",
          }}
          validationSchema={reviewSchema}
          onSubmit={(values) => {
            console.log(values);
            axios
              .post("http://192.168.1.65:5000/HiringForm", values)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          {(props) => (
            <View>
              {/* Name inpute */}
              <TextInput
                placeholder="Please enter name "
                onChangeText={props.handleChange("Name")}
                value={props.values.Name}
                onBlur={props.handleBlur("Name")}
              ></TextInput>
              {/* Handling test for name */}
              <Text> {props.touched.Name && props.errors.Name} </Text>

              {/* Age input */}
              <TextInput
                placeholder="Please enter age"
                onChangeText={props.handleChange("Age")}
                value={props.values.Age}
                onBlur={props.handleBlur("Age")}
              ></TextInput>
              {/* Handling test for age */}
              <Text> {props.touched.Age /* && props.errors.Age */} </Text>

              {/* Email input  */}
              <TextInput 
                        placeholder = 'Please enter email '
                        onChangeText = { props.handleChange('Email') }
                        value = { props.values.Email}                     
                        onBlur = {props.handleBlur('Email')} >
                        </TextInput> 
              {/* Handling test for email */}
              <Text> { props.touched.Email && props.errors.Email } </Text>  

              {/* PhoneNumber input */}
              <TextInput
                placeholder="Please enter your phone number "
                onChangeText={props.handleChange("PhoneNumber")}
                value={props.values.PhoneNumber}
                onBlur={props.handleBlur("PhoneNumber")}
              ></TextInput>
              {/* Handling test for phonenumber */}
              <Text>
                {" "}
                {props.touched.PhoneNumber && props.errors.PhoneNumber}{" "}
              </Text>

              {/* NumberOfKidsYouCanHandel input */}
              <TextInput
                placeholder="How manny kids you can work with at the same time"
                onChangeText={props.handleChange("NumberOfKidsYouCanHandel")}
                value={
                  props.touched.NumberOfKidsYouCanHandel &&
                  props.values.NumberOfKidsYouCanHandel
                }
                onBlur={props.handleBlur("NumberOfKidsYouCanHandel")}
              ></TextInput>
              {/* Handling test for numberOfKids   */}
              <Text>
                {" "}
                {props.touched.NumberOfKidsYouCanHandel &&
                  props.errors.NumberOfKidsYouCanHandel}
              </Text>

              {/* Place input */}
              <TextInput
                placeholder="Please enter where you live "
                onChangeText={props.handleChange("Place")}
                value={props.values.Place}
                onBlur={props.handleBlur("Place")}
              ></TextInput>
              {/* Handling test for place */}
              <Text> {props.touched.Place && props.errors.Place} </Text>

              {/* EducationLevel input */}
              <TextInput
                placeholder="Please enter your Education Level"
                onChangeText={props.handleChange("EducationLevel")}
                value={props.values.EducationLevel}
                onBlur={props.handleBlur("EducationLevel")}
              ></TextInput>
              {/* Handling test for education lvl */}
              <Text>
                {" "}
                {props.touched.EducationLevel &&
                  props.errors.EducationLevel}{" "}
              </Text>

              {/* HowMannyHoursYouCanWorkADay input  */}
              <TextInput
                placeholder="How manny hours you can work a day ?"
                onChangeText={props.handleChange("HowMannyHoursYouCanWorkADay")}
                value={props.values.HowMannyHoursYouCanWorkADay}
                onBlur={props.handleBlur("HowMannyHoursYouCanWorkADay")}
              ></TextInput>
              {/* Handling test for number of hours */}
              <Text>
                {" "}
                {props.touched.HowMannyHoursYouCanWorkADay &&
                  props.errors.HowMannyHoursYouCanWorkADay}{" "}
              </Text>

              {/* ExperensLevel input  */}
              <TextInput
                placeholder="What's your experens level ?"
                onChangeText={props.handleChange("ExperensLevel")}
                value={props.values.ExperensLevel}
                onBlur={props.handleBlur("ExperensLevel")}
              ></TextInput>
              {/* Handling test for exp lvl */}
              <Text>
                {" "}
                {props.touched.ExperensLevel && props.errors.ExperensLevel}{" "}
              </Text>

              {/* submit bttn  */}
              <Button
                title="Submit"
                mode="contained"
                onPress={props.handleSubmit}
              />
            </View>
          )}
        </Formik>
>>>>>>> 7d61d95a748fc4efb107abad1752a1a8fc9cb915
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
