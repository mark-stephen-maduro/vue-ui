<template>
  <div class="app-styles">
    <IpyAppsGlobalMenu :subscription="subscribedApps">
      <b-button>Subscription</b-button>
    </IpyAppsGlobalMenu>
  </div>
</template>

<script>
import IpyAppsGlobalMenu from '../../../packages/apps-global-menu/src/IpyAppsGlobalMenu.vue'
export default {
  components: {
    IpyAppsGlobalMenu,
  },

  data() {
    return {
      subscribedApps: [
        {
          app_name: 'Accounting',
          app_description: 'Manage your financial transactions.',
          app_link: '/design',
          file: {
            filename: 'chart-bar',
            type: '',
            fd: '',
          },
          isNew: false,
        },
        {
          app_name: 'Inventory Management',
          app_description: 'Stocks monitoring.',
          app_link: {
            path: '/css',
          },
          file: {
            filename: 'box',
            type: '',
            fd: '',
          },
          isNew: false,
        },
        {
          app_name: 'CRM',
          app_description: 'Get in touch with your potential leads.',
          app_link: 'https://www.google.com',
          file: {
            filename: 'users',
            type: '',
            fd: '',
          },
          isNew: false,
        },
        {
          app_name: 'Project Management',
          app_description: "Organize your organization's projects",
          app_link: '',
          file: {
            filename: 'calendar-alt',
            type: '',
            fd: '',
          },
          isNew: false,
        },
        {
          app_name: 'Procurement',
          app_description: 'Acquire goods from your supplier.',
          app_link: '',
          file: {
            filename: 'truck-loading',
            type: '',
            fd: '',
          },
          isNew: false,
        },
        {
          app_name: 'Payroll',
          app_description: 'Manage your employees payroll.',
          app_link: '',
          file: {
            filename: 'building',
            type: '',
            fd: '',
          },
          isNew: false,
        },
        {
          app_name: 'Sales and Order',
          app_description: 'Track and fulfill your sales.',
          app_link: '',
          file: {
            filename: 'credit-card',
            type: '',
            fd: '',
          },
          isNew: false,
        },
        {
          app_name: 'Time and Labor',
          app_description: "Track your employee's progress.",
          app_link: '',
          file: {
            filename: 'clock',
            type: '',
            fd: '',
          },
          isNew: false,
        },
        {
          app_name: 'Reports',
          app_description:
            "Generate and customize your organization's file reports base on your needs.",
          app_link: '',
          file: {
            filename: 'clipboard-list',
            type: '',
            fd: '',
          },
          isNew: false,
        },
      ],
    }
  },
}
</script>

<style></style>
