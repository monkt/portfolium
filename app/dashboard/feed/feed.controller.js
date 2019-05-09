angular.module('PortfoliumFeed.Dashboard')
  .controller('DashboardCtrl', function (ProjectsService) {

    const dashboard = this;
    dashboard.projects = [];
    dashboard.hasProjects = null;
    dashboard.loading = true;

    ProjectsService.fetchProjects(dashboard.projects.length).then(
      (projects) => {
        dashboard.projects = projects;
        dashboard.loading = false;
      }
    );

    dashboard.paging = () => {
      const offset = dashboard.projects.length || 0;
      ProjectsService.fetchProjects(offset).then((projects) => {
        dashboard.projects = dashboard.projects.concat(projects);
      });
    };

    dashboard.hasProjects = () => {
      return dashboard.projects.length > 0 ? true : false;
    };

});
