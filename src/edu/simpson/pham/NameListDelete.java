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

/**
 * Created by Lana on 3/2/2017.
 */
@WebServlet(name = "NameListDelete")

public class NameListDelete extends javax.servlet.http.HttpServlet {

    //Handle Post requests
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        // Grab the data we got via a parameter
        String id = request.getParameter("id");

        // Just print the data out to confirm we got it.
        out.println("id='"+ id);

        PersonDAO.deletePerson(id);

    }
}
