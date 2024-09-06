est
public class LoanApplicationFormTest {
    @isTest
    static void testHandleSubmitSuccess() {
        Test.startTest();
        
        // Mocking the Apex method
        LoanApplicationController.submitLoanApplication(
            (applicationData) -> {
                return null;
            }
        );

        // Creating the component
        LoanApplicationForm component = new LoanApplicationForm();
        component.personalInfo = new Map<String, String>{'personalFirstName' => 'John', 'personalLastName' => 'Doe', 'personalEmail' => 'john.doe@example.com', 'personalPhone' => '1234567890'};
        component.employmentDetails = new Map<String, String>{'employmentEmployer' => 'ABC Corp', 'employmentJobTitle' => 'Developer'};
        component.financialInfo = new Map<String, String>{'financialAnnualIncome' => '100000', 'financialLoanAmount' => '50000'};
        
        component.handleSubmit();
        
        Test.stopTest();
        
        System.assertEquals('Application submitted successfully!', component.successMessage);
        System.assertEquals('', component.errorMessage);
        System.assertEquals(false, component.isLoading);
    }

    @isTest
    static void testHandleSubmitError() {
        Test.startTest();
        
        // Mocking the Apex method to throw an exception
        LoanApplicationController.submitLoanApplication(
            (applicationData) -> {
                throw new AuraHandledException('Test exception');
            }
        );

        // Creating the component
        LoanApplicationForm component = new LoanApplicationForm();
        component.personalInfo = new Map<String, String>{'personalFirstName' => 'John', 'personalLastName' => 'Doe', 'personalEmail' => 'john.doe@example.com', 'personalPhone' => '1234567890'};
        component.employmentDetails = new Map<String, String>{'employmentEmployer' => 'ABC Corp', 'employmentJobTitle' => 'Developer'};
        component.financialInfo = new Map<String, String>{'financialAnnualIncome' => '100000', 'financialLoanAmount' => '50000'};
        
        component.handleSubmit();
        
        Test.stopTest();
        
        System.assertEquals('', component.successMessage);
        System.assertEquals('Error submitting application: Test exception', component.errorMessage);
        System.assertEquals(false, component.isLoading);
    }
}
