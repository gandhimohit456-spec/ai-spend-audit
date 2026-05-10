# Test Plan

## Objective

The goal of testing is to validate:
- audit calculations
- recommendation accuracy
- savings estimation
- responsive UI behavior
- routing and navigation flow

---

## Manual Tests

### Homepage Navigation
- Verify the homepage loads correctly
- Verify the "Start Free Audit" button navigates to the audit page

### Audit Form
- Verify all fields accept valid input
- Verify Enter key submits the form
- Verify audit data persists during navigation

### Result Page
- Verify savings calculations render correctly
- Verify recommendations appear dynamically
- Verify annual savings are calculated correctly
- Verify confidence score renders properly

### Responsive Design
- Verify layout works on:
  - desktop
  - tablet
  - mobile viewport

### Navigation
- Verify users can run another audit
- Verify invalid states redirect safely

---

## Planned Automated Tests

### Audit Engine Tests
- ChatGPT Team downgrade detection
- Claude Enterprise overspend detection
- OpenAI API overspend logic
- Annual savings calculation
- Confidence score rendering

### UI Tests
- Audit form rendering
- Button interactions
- Route navigation
- Result page rendering

---

## Known Limitations

- No backend persistence yet
- No authentication layer
- AI summaries currently use fallback logic
- Shareable audit URLs not yet implemented