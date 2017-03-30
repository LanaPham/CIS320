package edu.simpson.pham;

/**
 * Created by Lana on 3/23/2017.
 */
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by paul.craven on 3/20/2017.
 */
@WebServlet(name = "LoginServlet")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        String loginId = request.getParameter("loginId");

        HttpSession session = request.getSession();
        session.setAttribute("loginId", loginId);

        out.println("Done calling Login Servlet");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
