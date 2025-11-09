package com.crud;

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class EditData
 */
@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			Connection con = JDBC.getConnection();
			
			PreparedStatement st = con.prepareStatement(
					"update winter_internship set invoice_currency=?,cust_payment_terms=? where sl_no=?;");
                    
			
			st.setString(1, request.getParameter("Invoice_currency"));
			st.setString(2, request.getParameter("Cust_payment_terms"));
			st.setString(3, request.getParameter("Sl_no"));
			
			st.executeUpdate();

			st.close();
			con.close();
			
			System.out.println("Successfull");
			
		}catch(Exception e) {
			e.printStackTrace();	
			}
	}

}
