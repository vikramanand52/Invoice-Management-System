package com.crud;
import java.sql.Connection;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


/**
 * Servlet implementaticlass FetchServlet
 */
@WebServlet("/FetchServlet")
public class FetchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FetchServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//int row=10;
		try {
			//String pageIn=request.getParameter("page");
			//int page=Integer.parseInt(pageIn)*row;
			Connection conn = JDBC.getConnection();
			Statement s=conn.createStatement();
			String query = "SELECT sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id from winter_internship where is_deleted = 0";
			ResultSet rs = s.executeQuery(query);
			ArrayList<Pojo> ALLData=new ArrayList<Pojo>();
			while(rs.next()) {
				Pojo p=new Pojo();
				p.setSlno(rs.getInt("sl_no"));
				p.setBusinesscode(rs.getString("business_code"));
				p.setCustnum(rs.getLong("cust_number"));
				p.setCleardate(rs.getString("clear_date"));
				p.setBusinessyear(rs.getInt("buisness_year"));
				p.setDocId(rs.getLong("doc_id"));
				p.setPostingdate(rs.getString("posting_date"));
				p.setDocumentCreateDate(rs.getString("document_create_date"));
				p.setDuedate(rs.getString("due_in_date"));
				p.setInvoiceCurrency(rs.getString("invoice_currency"));
				p.setDocumenttype(rs.getString("document_type"));
				p.setPostingId(rs.getInt("posting_id"));
				p.setTotalAmt(rs.getDouble("total_open_amount"));
				p.setBaselinedate(rs.getString("baseline_create_date"));
				p.setCustpayterms(rs.getString("cust_payment_terms"));
				p.setInvoiceId(rs.getLong("invoice_id"));
				ALLData.add(p);
			}
			/*for(Pojo stud: ALLData)
			 {
				 System.out.println(stud.toString());
			 }*/
			Gson gson = new GsonBuilder().serializeNulls().create();
			String dat=gson.toJson(ALLData);
			try {
				response.setHeader("Access-Control-Allow-Origin", "*");
				response.getWriter().write(dat); //getWriter() returns a PrintWriter object that can send character text to the client. 
			}
			catch(IOException e) {
				e.printStackTrace();
				System.out.println("exception occur");
			}
			rs.close();
			s.close();
			conn.close();
		}
		catch(SQLException e) {
			e.printStackTrace();
			System.out.println("exception occur");
		}
		catch(Exception e) {
			e.printStackTrace();
			System.out.println("exception occur");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
