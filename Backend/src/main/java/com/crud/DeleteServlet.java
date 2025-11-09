package com.crud;

import java.util.*;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet("/DeleteServlet")
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	
			HashMap<Object, Object> resp = new HashMap<Object, Object>();
			//System.out.println(String.join(", ", sl_no));
			
			String sl_no[]=request.getParameterValues("sl_no");
			for(int i = 0; i < sl_no.length; i++)
			{
				sl_no[i] = "\'" + sl_no[i] + "\'";
			}
			String data = String.join(", ", sl_no);
			
			try {
				Connection conn =JDBC.getConnection();
				
				String query = "UPDATE winter_internship SET is_deleted = 1 where sl_no IN (" + data + ")";
				
				PreparedStatement pst = conn.prepareStatement(query);
				//pst.setString(1, String.join(", ", sl_no) );
				
				if(pst.executeUpdate() > 0)
				{
					resp.put("delete", true);
				}
				else
				{
					resp.put("delete", false);
				}
			}
			catch(Exception e)
			{
				System.out.println(e);
				resp.put("delete", false);
			}
			Gson gson = new Gson();
			String respData = gson.toJson(resp);
			
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().append(respData);
			
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
