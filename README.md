# fhj.swengs2019.project

<b>BandPortal[BP]</b> <br />
(C) PandaBandPortal[PBP]

<b>Team Members:</b><br />
Miriam Grainer<br />
Stefan Krasser<br />
Christoph Mali<br />
Thomas Ortner<br /><br />

<b>Work Distributions:</b><br />
Miriam Grainer: Authentication, Login, HomeComponent, Security, BandView Component, Main Design<br />
Stefan Krasser: BandView (add Member, add Events, add Bandpicture, edit Band info, Formvalidation, Security), User Edit<br />
Christoph Mali: Backend, Map(show Events, show Bands, show Both, Legend) <br />
Thomas Ortner: Backend, BanduserList Component, BanduserForm Component<br /><br />

<b>Instructions:</b><br /> 
1. Download backend and frontend folder and put it into the same directory.<br /> 
2. Open Backend in IntelliJ and edit application.properties to connect to your own database and before you first start the backend set "spring.jpa.hibernate.ddl-auto = create-drop".<br /> 
3. Start backend, set "spring.jpa.hibernate.ddl-auto = update" and fill it with insert statements from the Inserts file that lies in the root folder, but change the tablename with search and replace to "Your database-scheme.country" instead of "country" <br /> 
4. Open the CommandLine and navigate to the frontend folder<br /> 
5. Run "npm install"<br /> 
6. Open the frontend in IntelliJ and start the application (alternatively run "ng serve" in cmd).<br /> 
7. Open it in a browser with the url "http://localhost:4200/"<br /> 
8. The credentials for the user are <b>USERNAME: admin PASSWORD: 12345</b><br /> 

<br /><b>Now you can start your journey through the BandPortal!!!!!!!</b><br /> 
