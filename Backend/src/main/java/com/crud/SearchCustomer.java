package com.crud;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class SearchCustomer
 */
@WebServlet("/SearchCustomer")
public class SearchCustomer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchCustomer() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		ArrayList<Pojo> res = new ArrayList<Pojo>();
		
		try {
			Connection conn = JDBC.getConnection();
			String parameter = request.getParameter("customer_id");
			
			String query = "SELECT sl_no, Business_code, cust_number, clear_date, buisness_year, doc_id,"
					+ "posting_date, document_create_date, due_in_date, invoice_currency, document_type,"
					+ "posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id"
					+ " FROM winter_internship WHERE cust_number LIKE \'%" + parameter + "%\'";
			
			PreparedStatement pst = conn.prepareStatement(query);			
			ResultSet rs = pst.executeQuery();
			
			while(rs.next())
			{
				Pojo d = new Pojo();
				d.setSlno(rs.getInt(1));
				d.setBusinesscode(rs.getString(2));
				d.setCustnum(rs.getLong(3));
				d.setCleardate(rs.getString(4));
				d.setBusinesscode(rs.getString(5));
				d.setDocId(rs.getLong(6));
				d.setPostingdate(rs.getString(7));
				d.setDocumentCreateDate(rs.getString(8));
				d.setDuedate(rs.getString(9));
				d.setInvoiceCurrency(rs.getString(10));
				d.setDocumentCreateDate(rs.getString(11));
				d.setPostingdate(rs.getString(12));
				d.setTotalAmt(rs.getDouble(13));
				d.setBaselinedate(rs.getString(14));
				d.setCustpayterms(rs.getString(15));
				d.setInvoiceId(rs.getLong(16));
				
				res.add(d);
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		
		Gson gson = new Gson();
		String respData = gson.toJson(res);
		
		response.getWriter().print(respData);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
