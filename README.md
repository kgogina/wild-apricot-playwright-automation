# Wild Apricot – Playwright Automation (TypeScript)

This project is an end-to-end automation script for Wild Apricot’s Admin Store.  
It uses **Playwright + TypeScript** to log in as an admin, create a new physical product, upload an image, fill required fields, save the product, and verify that it appears in the product list.

## Preview

This test covers:

- Login to Wild Apricot
- Switching to Admin View
- Navigating to Store → Products
- Adding a new physical product
- Filling all form fields
- Uploading an image
- Tracking inventory
- Saving the product
- Verifying the product appears in the list

## Usage

To run the automation project, follow these steps:

1. **Clone or download** the repository.
2. Install dependencies:

   ```bash
   npm install
   npx playwright install
   ```

3. Run the test:

   ```bash
   npx playwright test tests/e2e.spec.ts
   ```

4. Run with UI:

   ```bash
   npx playwright test --headed
   ```

5. View the HTML report:

   ```bash
    npx playwright show-report
   ```

## Project Structure

```
pages/               # Page Object classes
locators/            # All locators separated by pages
tests/               # Test specs + test data
utils/               # Environment variables (URL + credentials)
assets/              # Image used for product upload
playwright.config.ts # Global test configuration
```

##  Page Objects

### LoginPage

- Opens the site
- Navigates to Login
- Enters email + password
- Verifies login success

### AdminDashboardPage

- Switches to Admin View
- Opens Store → Products

### StoreProductsPage

- Verifies Products page
- Opens Add Product
- Selects product type (Physical)
- Verifies product exists in list

### ProductFormPage

- Fills required fields
- Uploads image
- Sets inventory
- Saves product

## ⚙️ Test Logic Overview

The main test (`tests/e2e.spec.ts`) performs:

1. Login
2. Enter admin dashboard
3. Navigate to Store → Products
4. Create new physical product
5. Save
6. Verify product name exists in the product list

## Required Environment Variables

These must be updated in:

```
utils/env.ts
```

- **BASE_URL** — your Wild Apricot site URL
- **ADMIN_EMAIL** — administrator email
- **ADMIN_PASSWORD** — administrator password

## Assumptions & Limitations

- Only tested on Chromium
- Product name validation is based on visible text matching
- Test data is static.
- The test currently relies on a static product name, so if the item is not deleted after the first run, the next execution will fail due to the name already existing.

## Future Improvements

- I would replace static test data with randomized, dynamic data generation to make the tests more flexible and reduce dependencies on fixed values.
- I would also expand the Page Object methods to cover a full CRUD flow — including validating, updating, and deleting items.
- I would introduce more negative test scenarios to verify how the system handles invalid inputs, missing fields, boundary values, and error messages.
