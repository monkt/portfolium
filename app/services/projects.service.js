angular.module('PortfoliumFeed')
  .service('ProjectsService',
    function($http) {
      
      const service = this;
      const api = 'https://api.portfolium.com/entries/expert';

      service.fetchProjects = (offset) => {
        const url = service.getURL(offset);
        const opts = { method: 'GET', url: url};
        return $http(opts)
          .then((response) => {
            return response.data;
          }, (response) => {
            console.log('error');
          });
      }

      service.getURL = (offset) => {
        return `${api}?limit=13&offset=${offset}&sort=recent&X-API-KEY=devtest`
      }

    }
  );
