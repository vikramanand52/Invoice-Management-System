package com.crud;

//POJO - PLAIN OLD JAVA OBJECT
public class Pojo{
	private Integer sl_no;
	private String business_code;
	private Long cust_number;
	private String clear_date;
	private Integer buisness_year;
	private Long doc_id;
	private String posting_date;
	private String document_create_date;
	private String due_in_date;
	private String invoice_currency;
	private String document_type;
	private Integer posting_id;
	private Double total_open_amount;
	private String baseline_create_date;
	private String cust_payment_terms;
	private Long invoice_id;
	
	public Integer getSlno() {
		return sl_no;
	}
	public void setSlno(Integer sl_no) {
		this.sl_no=sl_no;
	}
		
	public String getBusinesscode() {
			return business_code;
		}
		public void setBusinesscode(String business_code) {
			this.business_code=business_code;
		}
		public Long getCustnum() {
			return cust_number;
		}
		public void setCustnum(Long cust_number) {
			this.cust_number=cust_number;
		}
		public String getCleardate() {
			return clear_date;
		}
		public void setCleardate(String clear_date) {
			this.clear_date=clear_date;
		}
		public Integer getBusinessyear() {
			return buisness_year;
		}
		public void setBusinessyear(Integer buisness_year) {
			this.buisness_year=buisness_year;
		}
		public Long getDocId() {
			return doc_id;
		}
		public void setDocId(Long doc_id) {
			this.doc_id=doc_id;
		}
		public String getPostingdate() {
			return posting_date;
		}
		public void setPostingdate(String posting_date) {
			this.posting_date=posting_date;
		}
		public String getDocumentCreateDate() {
			return document_create_date;
		}
		public void setDocumentCreateDate(String document_create_date) {
			this.document_create_date=document_create_date;
		}
		//private String due_in_date;
		public String getDuedate() {
			return due_in_date;
		}
		public void setDuedate(String due_in_date) {
			this.due_in_date=due_in_date;
		}
		//private String invoice_currency;
		public String getInvoiceCurrency() {
			return invoice_currency;
		}
		public void setInvoiceCurrency(String invoice_currency) {
			this.invoice_currency=invoice_currency;
		}
		//private String document_type;
		public String getDocumenttype() {
			return document_type;
		}
		public void setDocumenttype(String document_type) {
			this.document_type=document_type;
		}
		//private Integer posting_id;
		public Integer getPostingId() {
			return posting_id;
		}
		public void setPostingId(Integer posting_id) {
			this.posting_id=posting_id;
		}
		//private Double total_open_amount;
		public Double getTotalAmt() {
			return total_open_amount;
		}
		public void setTotalAmt(Double total_open_amount) {
			this.total_open_amount=total_open_amount;
		}
		//private String baseline_create_date;
		public String getBaselinedate() {
			return baseline_create_date;
		}
		public void setBaselinedate(String baseline_create_date) {
			this.baseline_create_date=baseline_create_date;
		}
		//private String cust_payment_terms;
		public String getCustpayterms() {
			return cust_payment_terms;
		}
		public void setCustpayterms(String cust_payment_terms) {
			this.cust_payment_terms=cust_payment_terms;
		}
		//private Long invoice_id;
		public Long getInvoiceId() {
			return invoice_id;
		}
		public void setInvoiceId(Long invoice_id) {
			this.invoice_id=invoice_id;
		}
		
		
		/*private String business_code;
		private Long cust_number;
		private String clear_date;
		private Integer business_year;
		private Long doc_id;
		private String posting_date;
		private String document_create_date;
		private String due_in_date;
		private String invoice_currency;
		private String document_type;
		private Integer posting_id;
		private Double total_open_amount;
		private String baseline_create_date;
		private String cust_payment_terms;
		private Long invoice_id;*/	

		@Override
		public String toString() {
			return "Pojo[businessCode="+business_code+","+"CustNumber="+cust_number+",ClearDate="+clear_date+""
					+ ", BusinessYear=" +buisness_year+ ", DocumentId="+doc_id+", PostingDate= "+posting_date+""
							+ " ,DocumentCreate= "+document_create_date+", DueDate= "+due_in_date+"" 
							+ " ,InvoiceCurrency="+invoice_currency+""
									+ ", DocumentType=" +document_type+ " , PostingId= "+posting_id+""
											+ ",TotalOpenAmount=" +total_open_amount+", "
													+ "BaselineCreateDate="+baseline_create_date+","
															+ " CustPayTerms= "+cust_payment_terms+","
																	+ " InvoiceId= "+invoice_id+" ]";
		}
		
		
		

}
