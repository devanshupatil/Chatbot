# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## OrganizationSetup Component

The `OrganizationSetup` component is responsible for managing a list of organizations within the application. It allows users to add, update, and delete organizations, providing a seamless user experience.

### Features
- **Add New Organization**: Users can add new organizations to their list.
- **Update Organization**: Existing organizations can be updated through a modal interface.
- **Delete Organization**: Users can delete organizations from their list.
- **View Organization Details**: Users can view detailed information about each organization, including the company name, URL, and description.

### Code Snippet
```javascript
const handleDelete = (index) => {
  localStorage.setItem('data', JSON.stringify(data.filter((item, i) => i !== index)));
  window.location.reload();
  toast.success('Item deleted successfully');
};
