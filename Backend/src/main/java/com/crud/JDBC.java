package com.crud;

//CRUD - CREATE READ UPDATE DELETE
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

//import com.pojo.Pojo;

public class JDBC {

	public static Connection getConnection()
	{
		 Connection conn =null;
		 String url ="jdbc:mysql://localhost:3306/grey_goose";
		 String user = "root";
		 String pass ="123456789";
			
			try {
				try {
					Class.forName("com.mysql.cj.jdbc.Driver");
				} catch (ClassNotFoundException e) {
					
					e.printStackTrace();
				}
				conn =DriverManager.getConnection(url,user,pass);
				System.out.println("Post establishing a DB connection: "+conn);
			}catch (SQLException e) {
				System.out.println("Error Occured");
					e.printStackTrace();
				}
				
				return conn;

		}
}
		/*public ArrayList<Pojo> getData()
		{
			ArrayList<Pojo> ALLData=new ArrayList<Pojo>();
			String business_code;
			Long cust_number;
			String clear_date;
			Integer business_year;
			Long doc_id;
			String posting_date;
			String document_create_date;
			String due_in_date;
			String invoice_currency;
			String document_type;
			Integer posting_id;
			Double total_open_amount;
			String baseline_create_date;
			String cust_payment_terms;
			Long invoice_id;
			try {
			 Connection conn = getConnection();
			 String sql_query="SELECT * from winter_internship";
			 PreparedStatement pst = conn.prepareStatement(sql_query);
			 //System.out.println(pst);
			 
			 ResultSet rs = pst.executeQuery();
			
			 while(rs.next())
			 {
					Pojo p = new Pojo();
					business_code = rs.getString("business_code");
					cust_number = rs.getLong("cust_number");
					clear_date = rs.getString("clear_date");
					business_year = rs.getInt("business_year");
					doc_id = rs.getLong("doc_id");
					posting_date = rs.getString("posting_date");
					document_create_date = rs.getString("document_create_date");
					due_in_date = rs.getString("due_in_date");
					invoice_currency = rs.getString("invoice_currency");
					document_type = rs.getString("document_type");
					posting_id = rs.getInt("posting_id");
					total_open_amount = rs.getDouble("total_open_amount");
					baseline_create_date = rs.getString("baseline_create_date");
					cust_payment_terms = rs.getString("cust_payment_terms");
					invoice_id = rs.getLong("invoice_id");
					
					p.setBusinesscode(business_code);
					p.setCustnum(cust_number);
					p.setCleardate(clear_date);
					p.setBusinessyear(business_year);
					p.setDocId(doc_id);
					p.setPostingdate(posting_date);
					p.setDocumentCreateDate(document_create_date);
					p.setDuedate(due_in_date);
					p.setInvoiceCurrency(invoice_currency);
					p.setDocumenttype(document_type);
					p.setPostingdate(posting_id);
					p.setTotalAmt(total_open_amount);
					p.setBaselinedate(baseline_create_date);
					p.setCustpayterms(cust_payment_terms);
					p.setInvoiceId(invoice_id);
					ALLData.add(p);
					
					
			 }
			 
			 for(Pojo stud: ALLData)
			 {
				 System.out.println(stud.toString());
			 }
			 
			}
			catch (Exception e) {
				e.printStackTrace();
				System.out.println("exception occur");
			}
			
			return ALLData;
			
		
		}*/
		
		
		

