package com.crud;

import java.util.*;
import java.io.IOException;
import java.sql.Connection;
import java.sql.*;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddServlet
 */
@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			HashMap<Object,Object>Response = new HashMap<Object,Object>(); 
			Connection conn = JDBC.getConnection();
			String temp = "select sl_no from winter_internship order by sl_no desc limit 1";
			PreparedStatement ps = conn.prepareStatement(temp);
			ResultSet rs=ps.executeQuery();
			String sl_no=" ";
			while(rs.next()) {
				 sl_no=String.valueOf(rs.getInt(1)+1);
			}
			String business_code = request.getParameter("business_code");
			String cust_number = request.getParameter("cust_number");
			String clear_date = request.getParameter("clear_date");
			String buisness_year = request.getParameter("buisness_year");
			String doc_id = request.getParameter("doc_id");
			String posting_date = request.getParameter("posting_date");
			String document_create_date = request.getParameter("document_create_date");
			String due_in_date = request.getParameter("due_in_date");
			String invoice_currency = request.getParameter("invoice_currency");
			String document_type = request.getParameter("document_type");
			String posting_id = request.getParameter("posting_id");
			String total_open_amount = request.getParameter("total_open_amount");
			String baseline_create_date = request.getParameter("baseline_create_date");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			String invoice_id = request.getParameter("invoice_id");
			
			String query = "INSERT INTO winter_internship (sl_no,business_code,cust_number,clear_date,buisness_year,doc_id"
					+ ",posting_date,document_create_date,due_in_date,invoice_currency,document_type"
					+ ",posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement pst = conn.prepareStatement(query);
			pst.setString(1, sl_no);
			pst.setString(2, business_code);
			pst.setString(3, cust_number);
			pst.setString(4, clear_date);
			pst.setString(5, buisness_year);
			pst.setString(6, doc_id);
			pst.setString(7, posting_date);
			pst.setString(8, document_create_date);
			pst.setString(9, due_in_date);
			pst.setString(10, invoice_currency);
			pst.setString(11, document_type);
			pst.setString(12, posting_id);
			pst.setString(13, total_open_amount);
			pst.setString(14, baseline_create_date);
			pst.setString(15, cust_payment_terms);
			pst.setString(16, invoice_id);
			if(pst.executeUpdate()>0) {
				Response.put("status", true);
			}
			else {
				Response.put("status", false);
			}
			Gson gson = new Gson();
			String ResponseJSON = gson.toJson(Response);
			try {
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().append(ResponseJSON);
			System.out.println(ResponseJSON);
			}catch(Exception e) {
				e.printStackTrace();
				System.out.println("exception occur");
			}
			conn.close();
		}
		catch(Exception e) {
			e.printStackTrace();
			System.out.println("Error");
		}
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
