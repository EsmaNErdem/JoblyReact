import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};
        try {
          return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // Get all companies, sending filter as params

  static async getAllCompanies(data) {
     const res = await this.request(`companies/`, data)
     return res.companies;
  }

  // Get all job, sending filter as params

  static async getAllJobs(data) {
    const res = await this.request(`jobs/`, data)
    return res.jobs;
  }

  // Get details on a job by id 

  static async getJob(id) {
    const res = await this.request(`jobs/${id}`)
    return res.jobs;
  }

  // Send post request to register a user, return token

  static async registerUser(data) {
    const res = await this.request(`/auth/register`, data, "post")
    this.token =  res.token;
    return res.token;
  }

  // Send post request to login user, return token

  static async loginUser(data) {
    const res = await this.request(`/auth/token`, data, "post")
    this.token =  res.token;
    return res.token;
  }

  // Get details on a user

  static async getUser(username, token) {
    this.token = token
    const res = await this.request(`/users/${username}`)
    return res.user;
  }

  // Send patch request to update user

  static async updateUser(username, data, token) {
    this.token = token
    const res = await this.request(`/users/${username}`, data, "patch")
    return res.user;
  }

  // Send post request to send user job application by username and job id

  static async sendUserAplication(username, id, token) {
    this.token = token
    const res = await this.request(`/users/${username}/jobs/${id}`, "post")
    return res.applied;
  }

    // Send delete request to update user

    static async deleteUserAplication(username, id, token) {
      this.token = token
      const res = await this.request(`/users/${username}/jobs/${id}`, "delete")
      return res.unapplied;
    }

}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi
