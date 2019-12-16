angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat ='$ctrl.fishes' fish='fish'></fish-table-row>

    </div>`
});