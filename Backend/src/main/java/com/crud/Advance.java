package com.crud;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class Advance
 */
@WebServlet("/Advance")
public class Advance extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Advance() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
		List<Pojo> list=new ArrayList<Pojo>();
	     try {
	       Connection con = JDBC.getConnection();
	       
	       PreparedStatement pst = con.prepareStatement("select * from winter_internship"
	           + " where doc_id=? and invoice_id=? and cust_number=? and buisness_year=?; ");
	       pst.setString(1, request.getParameter("Doc_id"));
	       pst.setString(2, request.getParameter("Invoice_id"));
	       pst.setString(3, request.getParameter("Cust_number"));
	       pst.setString(4, request.getParameter("Buisness_year"));
	       System.out.println(pst);
	       ResultSet rs=pst.executeQuery(); 
	        while(rs.next()){  
	        	Pojo client=new Pojo();  
	              client.setSlno(Integer.parseInt(rs.getString(1)));
	              client.setBusinesscode(rs.getString(2));
	              client.setCustnum(Long.parseLong(rs.getString(3)));  
	              client.setCleardate(rs.getString(4));  
	              client.setBusinessyear(rs.getInt(5));
	              client.setDocId(Long.parseLong(rs.getString(6)));
	              client.setPostingdate(rs.getString(7));
	              client.setDocumentCreateDate(rs.getString(8));
//	              client.setDocument_create_date1(rs.getString(9));
	              client.setDuedate(rs.getString(10));
	              client.setInvoiceCurrency(rs.getString(11));
	              client.setDocumenttype(rs.getString(12));
	              client.setPostingId(Integer.parseInt(rs.getString(13)));
//	              client.setArea_business(rs.getString(14));
	              client.setTotalAmt(Double.parseDouble(rs.getString(15)));
	              client.setBaselinedate(rs.getString(16));
	              client.setCustpayterms(rs.getString(17));
	              client.setInvoiceId(Long.parseLong(rs.getString(18)));
//	              client.setIsOpen(Integer.parseInt(rs.getString(19)));
//	              client.setAging_bucket(rs.getString(20));
//	              client.setIs_deleted(Integer.parseInt(rs.getString(21)));
	              
	              list.add(client);  
	          }  
	        
	        response.setContentType("application/json");
	           
	           Gson gson = new Gson();
	         String respData = gson.toJson(list);
//	         System.out.println(respData);
	         response.getWriter().print(respData);
	       
	       pst.close();
	       con.close();
	     }catch(Exception e) {
	       e.printStackTrace();
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
