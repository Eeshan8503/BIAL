# Team Description
 1. Eeshan Mattey [GitHub](https://github.com/Eeshan8503) [LinkedIn](https://linkedin.com/in/eeshan-mattey-1676741b7)
 2. Rhythm Shandlya [GitHub](https://github.com/rhythmshandlya) [LinkedIn](https://linkedin.com/in/rhythm-shandlya-a1a949201)

# Problem We Plan to Solve
## TROUBLE WITH BAGGAGE:
- Lost baggage is a common complaint people have at airport. There is a lot of pressure on the current, outdated baggage handling system, which is why airports need to start looking into more modern baggage solutions.
# App Objective
- **Generate QR codes for every individual Baggage** which can be scanned by any passenger or airport authority showing the information regarding to whom the lost baggage belongs to and email the location and relevant information to the owner about his/her baggage. This QR will also help the relevant authorities find the passenger and in a few minutes the passenger can be uniquely identified, and the relevant processes can be executed with more ease and less effort
# App Implementation
- The Application will be built upon **React Native framework** to natively-render the application for both iOS and Android.
- **JSON Web Tokens** to generate secure QR codes to physically authenticate luggage and their owners.
-  The Baggage JWT payload:
{
  “id”:43782432
   "iat":1516239022
}
- A **MongoDB database** to store implement a login and signup procedure for every new user to the Application
- **RESTful API with NodeJS and Express** for passengers as well as staff.
## Using azure services
- The User database can be stored in the **azure cosmos database**
- The app server can be **hosted on azure**
- Relevant **machine learning and artificial intelligence can later be implemented** helping the passengers even more like predicting cancellation chances of flights.

# User Point of view towards the application
### The user will be offered two options in his dashboard of the app
			
1. Generate a QR code for his/her baggage: The User can create a QR code for his luggage and stick over it
2. Scan a QR code on the baggage found by him/her: If a user finds a baggage in the vicinity, he/she can scan the QR code notifying the owner about his luggage where -abouts
3. Send a notification about a lost baggage: The user will also have an option to intimate the relevant airline staff and airport authorities about their lost baggage and the authorities can follow a similar protocol of scanning the QR code and solve the issue
# Result
-	A collective sense of responsibility can inculcate in the society wherein everybody can help everyone by doing nothing but scan a QR code.
### Might be concerns about the application:
-An obvious question might be that if a bag is left unattended it might get stolen or why should anyone bother to scan a QR code. Well, this is the scene now as well, if a bag is left unattended no body can do anything about it even if they plan to as the initial process is time consuming, by using our application it gives those passengers  a platform who wish and want to help and also the relavant authories to help the owner find their baggage jus by scanning a QR code, as the app grows in its production phase we also plan to in cash points users get when they scan a bag to relevant vouchers and coupons in different e commerce websites, stores, restaurants, etc, giving users another reason to help their fellow passengers and other people on the airport
