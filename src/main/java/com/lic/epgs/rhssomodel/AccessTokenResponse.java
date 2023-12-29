package com.lic.epgs.rhssomodel;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccessTokenResponse {
	private String access_token;
	private int expires_in;
	private int refresh_expires_in;
	private String refresh_token;
	private String token_type;
	@JsonProperty("not-before-policy")
	private int notBeforePolicy;
	private String session_state;
	private String scope;

	public String getAccess_token() {
		return access_token;
	}

	public void setAccess_token(String access_token) {
		this.access_token = access_token;
	}

	public int getExpires_in() {
		return expires_in;
	}

	public void setExpires_in(int expires_in) {
		this.expires_in = expires_in;
	}

	public int getRefresh_expires_in() {
		return refresh_expires_in;
	}

	public void setRefresh_expires_in(int refresh_expires_in) {
		this.refresh_expires_in = refresh_expires_in;
	}

	public String getRefresh_token() {
		return refresh_token;
	}

	public void setRefresh_token(String refresh_token) {
		this.refresh_token = refresh_token;
	}

	public String getToken_type() {
		return token_type;
	}

	public void setToken_type(String token_type) {
		this.token_type = token_type;
	}

	public int getNotBeforePolicy() {
		return notBeforePolicy;
	}

	public void setNotBeforePolicy(int notBeforePolicy) {
		this.notBeforePolicy = notBeforePolicy;
	}

	public String getSession_state() {
		return session_state;
	}

	public void setSession_state(String session_state) {
		this.session_state = session_state;
	}

	public String getScope() {
		return scope;
	}

	public void setScope(String scope) {
		this.scope = scope;
	}

	@Override
	public String toString() {
		return "AccessTokenResponse [access_token=" + access_token + ", expires_in=" + expires_in
				+ ", refresh_expires_in=" + refresh_expires_in + ", refresh_token=" + refresh_token + ", token_type="
				+ token_type + ", notBeforePolicy=" + notBeforePolicy + ", session_state=" + session_state + ", scope="
				+ scope + "]";
	}

}
