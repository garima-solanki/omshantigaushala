var shantiGaushala = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngRoute']);
shantiGaushala.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
        {
            id: 0, image: 'img_9571.jpg'
        },
        { id: 1, image: 'img_9520.jpg' }, { id: 2, image: 'img_9521.jpg' }, { id: 3, image: 'img_9518.jpg' }, { id: 4, image: 'Calf16.jpg' },
        { id: 5, image: 'img_9597.jpg' }, { id: 6, image: 'img_9547.jpg' }, { id: 7, image: 'img_9558.jpg' }, { id: 8, image: 'img_9562.jpg' }
    ];
});

shantiGaushala.controller('GalleryImagesCntrl', function ($scope) {
    $scope.GalleryImages = [
         {
             text: 'Gaushala',
             url: 'gallery1.jpg'
         }, {
             text: 'Inaugration',
             url: 'gallery2.jpg'
         }, {
             text: 'Satsang',
             url: 'gallery3.jpg'
         }, {
             text: 'Bhandara',
             url: 'gallery4.jpg'
         }, {
             text: 'Calves',
             url: 'gallery3 - Copy.jpg'
         }, {
             text: 'Cows',
             url: 'gallery4 - Copy.jpg'
         }];
});

shantiGaushala.controller('photoImagesCntrl', function ($scope, $state, $stateParams, $uibModal) {
    var category = $stateParams.name;
    $scope.displayedImages = [];
    $scope.GalleryImages = [
         {
             text: 'Gaushala',
             url: 'gallery1.jpg'
         }, {
             text: 'Gaushala',
             url: 'gallery2.jpg'
         }, {
             text: 'Satsang',
             url: 'gallery3.jpg'
         }, {
             text: 'Bhandara',
             url: 'gallery4.jpg'
         }, {
             text: 'Calves',
             url: 'gallery3 - Copy.jpg'
         }, {
             text: 'Cows',
             url: 'gallery4 - Copy.jpg'
         }];
    for (var i = 0; i < $scope.GalleryImages.length; i++) {
        if ($scope.GalleryImages[i].text == category) {
            $scope.displayedImages.push($scope.GalleryImages[i].url);
        }
    }
   
    $scope.open = function (size, template, params) {
        return $uibModal.open({
            animation: true,
            templateUrl: template || 'myModalContent.html',
            controller: 'ModalResultInstanceCtrl',
            size: size,
            resolve: {
                params: function() {
                    return params;
                }
            }
        });
    }
});
shantiGaushala.controller('ModalResultInstanceCtrl', function ($scope, $uibModalInstance, params) {
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [];
    for (var i = 0; i < params.length; i++)
    {
        var valueToPush = {};
        valueToPush.id = i;
        valueToPush.image = params[i];
        $scope.slides.push(valueToPush);
    }
    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };
})


