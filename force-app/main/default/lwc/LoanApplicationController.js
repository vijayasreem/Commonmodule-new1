
import { LightningElement, track } from 'lwc';
import submitLoanApplication from '@salesforce/apex/LoanApplicationController.submitLoanApplication';

export default class LoanApplicationForm extends LightningElement {
    @track personalInfo = {};
    @track employmentDetails = {};
    @track financialInfo = {};
    @track errorMessage = '';
    @track successMessage = '';
    @track isLoading = false;

    handleInputChange(event) {
        const { name, value } = event.target;
        if (name.startsWith('personal')) {
            this.personalInfo[name] = value;
        } else if (name.startsWith('employment')) {
            this.employmentDetails[name] = value;
        } else if (name.startsWith('financial')) {
            this.financialInfo[name] = value;
        }
    }

    validateForm() {
        // Add validation logic here
        return true;
    }

    handleSubmit() {
        if (!this.validateForm()) {
            this.errorMessage = 'Please complete all required fields correctly.';
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';

        const applicationData = {
            personalInfo: this.personalInfo,
            employmentDetails: this.employmentDetails,
            financialInfo: this.financialInfo
        };

        submitLoanApplication({ applicationData })
            .then(() => {
                this.successMessage = 'Application submitted successfully!';
            })
            .catch(error => {
                this.errorMessage = 'Error submitting application: ' + error.body.message;
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    render() {
        return `
            <template>
                <lightning-card title="Loan Application Form">
                    <div class="slds-p-around_medium">
                        <lightning-input label="First Name" name="personalFirstName" onchange={handleInputChange}></lightning-input>
                        <lightning-input label="Last Name" name="personalLastName" onchange={handleInputChange}></lightning-input>
                        <lightning-input label="Email" name="personalEmail" onchange={handleInputChange}></lightning-input>
                        <lightning-input label="Phone" name="personalPhone" onchange={handleInputChange}></lightning-input>
                        <lightning-input label="Employer" name="employmentEmployer" onchange={handleInputChange}></lightning-input>
                        <lightning-input label="Job Title" name="employmentJobTitle" onchange={handleInputChange}></lightning-input>
                        <lightning-input label="Annual Income" name="financialAnnualIncome" onchange={handleInputChange}></lightning-input>
                        <lightning-input label="Loan Amount" name="financialLoanAmount" onchange={handleInputChange}></lightning-input>
                        <lightning-button label="Submit" onclick={handleSubmit} class="slds-m-top_medium"></lightning-button>
                        <template if:true={isLoading}>
                            <lightning-spinner alternative-text="Loading"></lightning-spinner>
                        </template>
                        <template if:true={errorMessage}>
                            <div class="slds-text-color_error">{errorMessage}</div>
                        </template>
                        <template if:true={successMessage}>
                            <div class="slds-text-color_success">{successMessage}</div>
                        </template>
                    </div>
                </lightning-card>
            </template>
        `;
    }
}
