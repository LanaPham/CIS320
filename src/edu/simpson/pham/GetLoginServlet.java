package edu.simpson.pham;

/**
 * Created by Lana on 3/23/2017.
 */

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "GetLoginServlet")
public class GetLoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // --- Sessions ---

        // - This example uses a session to keep count of client requests.
        HttpSession session = request.getSession();

        String user = (String)session.getAttribute("loginId");
        if (user != null) {
            out.println("Login UserID: " + user);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}