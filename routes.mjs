import { resolve } from 'path';

export default function routes(app) {
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  //ROOT
  //Log in page
  //Register Page
  //
  //Jobs Controller (MiddleWare Required)
  //Add Jobs
  //Delete Jobs
  //Edit Jobs
  //Single Job 
  //MANY JOB FROM 1 COMPANY
  //
  // User Controller 
  // Resume (Template)
  // Profile (form)
  // Industry
  // Skills
  // Social Media
  // Arrange Interview
  // Put on ALERT if hiring

}
