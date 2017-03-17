package edu.simpson.pham;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.google.gson.Gson;



//Back-End Validate

/**
 * Created by Lana on 2/20/2017.
 */
@WebServlet(name = "NameListAdd")

public class NameListEdit extends javax.servlet.http.HttpServlet {

    private Pattern firstNameValidationPattern;
    private Pattern lastNameValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;


    public NameListEdit() {
        // --- Compile and set up all the regular expression patterns here ---
        firstNameValidationPattern = Pattern.compile("^[A-Za-z]{1,20}$");
        lastNameValidationPattern = Pattern.compile("^[A-Za-z]{1,20}$");
        emailValidationPattern = Pattern.compile("\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");
        phoneValidationPattern = Pattern.compile("([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$");
        birthdayValidationPattern = Pattern.compile("[0-9]{4}\\-[0-9]{2}\\-[0-9]{2}$");
    }

    //Handle Post requests
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        // Grab the data we got via a parameter
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phoneField = request.getParameter("phoneField");
        String birthday = request.getParameter("birthday");
        String id = request.getParameter("id");

        // Just print the data out to confirm we got it.
        out.println("ID='" + id + "firstName='"+firstName+"'" + "lastName=" + lastName + "'" + "email=" + email + "'" + "phoneField=" + phoneField + "'" + "birthday=" + birthday);

        //new instance of person
        Person person = new Person();
        person.setFirst(firstName);
        person.setLast(lastName);
        person.setEmail(email);
        person.setPhone(phoneField);
        person.setBirthday(birthday);
        person.setId(id);

        boolean value = true;

        //PersonDAO.addPerson(person);




        Matcher testFirstName = firstNameValidationPattern.matcher(firstName);
        if (testFirstName.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            value = false;
        }

        Matcher testLastName = lastNameValidationPattern.matcher(lastName);
        if (testLastName.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            value = false;
        }

        Matcher testEmail = emailValidationPattern.matcher(email);
        if (testEmail.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            value = false;
        }

        Matcher testPhoneField = phoneValidationPattern.matcher(phoneField);
        if (testPhoneField.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            value = false;
        }

        Matcher testBirthday = birthdayValidationPattern.matcher(birthday);
        if (testBirthday.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            value = false;
        }

        if (value == true) {
            if ("".equals(person.getId())) {
                out.println("add Person");
                PersonDAO.addPerson(person);
            } else {
                out.println("Edit Person");
                PersonDAO.editPerson(person);
            }
        }
    }
}
