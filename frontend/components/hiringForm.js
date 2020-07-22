import React from "react";
import { ScrollView } from "react-native";
import { Formik } from "formik";
import { View, Text } from "react-native-animatable";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
import * as yup from "yup";

const reviewSchema = yup.object({
  Name: yup.string().strict().required(),

  Age: yup
    .number()
    .required()
    .test("is-age-<18", "you must be 18 or older", (val) => {
      return parseInt(val) > 18 && parseInt(val) < 100;
    }),

  // Email : yup.string()
  //             .email()
  //             .required(),

  // PhoneNumber : yup.number()
  //                 .required()
  //                 .test("is-phone<10", "phone number must have 10 nubers", (val) => {
  //                     return parseInt(val) === 10
  //                 }),

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
              {/* Handling test for numberOfKids */}
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
      </View>
    </ScrollView>
  );
}
