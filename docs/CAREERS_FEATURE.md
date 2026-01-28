# Careers Feature Documentation

## Overview
This document outlines the technical implementation of the Job Listing and Application feature for the Securico website.

## Frontend Implementation

### Components
- **`JobListing`**: Main container for displaying the list of jobs. Handles client-side filtering and search.
- **`JobCard`**: Displays individual job summary (title, department, location) and a link to the details page.
- **`ApplicationForm`**: Formik-based form with Yup validation for handling job applications. Supports file uploads.

### Pages
- **`/resources/careers`**: Displays the job listing.
- **`/resources/careers/[id]`**: Dynamic route for displaying job details and the application form.

### Data
- **`data/jobs.ts`**: Contains mock data for development and testing purposes.
- **`types/job.ts`**: TypeScript interfaces for `Job` and `Application` data structures.

## Conceptual Backend Integration

### API Endpoints

#### 1. Fetch Job Listings
- **Endpoint**: `GET /api/jobs`
- **Query Parameters**:
  - `search` (string, optional): Keyword search for title or description.
  - `department` (string, optional): Filter by department.
  - `location` (string, optional): Filter by location.
  - `page` (number, optional): For pagination.
  - `limit` (number, optional): Items per page.
- **Response**:
  ```json
  {
    "data": [
      {
        "id": "1",
        "title": "Security Systems Engineer",
        "department": "Technical",
        "location": "Harare",
        "type": "Full-time",
        "postedDate": "2024-05-15"
      }
      // ...
    ],
    "meta": {
      "total": 10,
      "page": 1,
      "last_page": 2
    }
  }
  ```

#### 2. Fetch Job Details
- **Endpoint**: `GET /api/jobs/:id`
- **Response**:
  ```json
  {
    "id": "1",
    "title": "Security Systems Engineer",
    "description": "...",
    "responsibilities": ["..."],
    "qualifications": ["..."],
    "benefits": ["..."]
    // ...
  }
  ```

#### 3. Submit Application
- **Endpoint**: `POST /api/applications`
- **Content-Type**: `multipart/form-data`
- **Body**:
  - `fullName`: string
  - `email`: string
  - `phone`: string
  - `resume`: File (PDF, DOCX)
  - `coverLetter`: File (PDF, DOCX, optional)
  - `experience`: string
  - `portfolioUrl`: string (optional)
  - `jobId`: string
- **Response**:
  ```json
  {
    "message": "Application submitted successfully",
    "applicationId": "12345"
  }
  ```

## Database Schema (Conceptual)

### Jobs Table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary Key |
| title | VARCHAR | Job Title |
| department | VARCHAR | Department Name |
| location | VARCHAR | City/Region |
| type | VARCHAR | Full-time, Part-time, etc. |
| description | TEXT | Full HTML/Markdown description |
| responsibilities | JSONB | Array of responsibilities |
| qualifications | JSONB | Array of qualifications |
| benefits | JSONB | Array of benefits |
| is_active | BOOLEAN | Visibility status |
| created_at | TIMESTAMP | |

### Applications Table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary Key |
| job_id | UUID | Foreign Key to Jobs |
| full_name | VARCHAR | Applicant Name |
| email | VARCHAR | Applicant Email |
| phone | VARCHAR | Applicant Phone |
| resume_url | VARCHAR | Path to stored resume file |
| cover_letter_url | VARCHAR | Path to stored cover letter |
| experience | TEXT | Experience summary |
| portfolio_url | VARCHAR | External link |
| status | VARCHAR | Pending, Reviewed, Rejected, Hired |
| created_at | TIMESTAMP | |

## Testing Plan

### 1. Job Listing Display
- [ ] Open `/resources/careers`.
- [ ] Verify that job cards are displayed with correct information.
- [ ] Test **Search**: Type "Security" and verify results filter correctly.
- [ ] Test **Department Filter**: Select "Technical" and verify only technical jobs show.
- [ ] Test **Location Filter**: Select "Bulawayo" and verify only Bulawayo jobs show.

### 2. Job Details Navigation
- [ ] Click "View Details" on a job card.
- [ ] Verify navigation to `/resources/careers/[id]`.
- [ ] Check that the job title, description, and other details match the selected job.
- [ ] Test the "Back to Careers" button.

### 3. Application Form Validation
- [ ] Scroll to the application form on the details page.
- [ ] Click "Submit Application" without filling any fields.
- [ ] Verify that validation error messages appear for all required fields.
- [ ] Upload a file larger than 5MB (if possible to simulate) or invalid format (e.g., .exe).
- [ ] Verify error message for invalid file.

### 4. Successful Submission
- [ ] Fill in all required fields with valid data.
- [ ] Upload a valid PDF/DOCX resume.
- [ ] Click "Submit Application".
- [ ] Verify the success message "Application Submitted!" is displayed.
- [ ] Verify the form is reset or hidden.

### 5. Responsiveness
- [ ] Resize browser window to mobile view (approx 375px width).
- [ ] Verify the layout adjusts correctly (stacking order, padding).
- [ ] Check menu and filter usability on mobile.
