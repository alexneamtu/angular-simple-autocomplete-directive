class controller {
    constructor($scope) {
        this.$scope = $scope;
        $scope.selected = -1;

        $scope.selectOption = this.selectOption.bind(this);
        $scope.autocomplete = this.autocomplete.bind(this);
        $scope.keyEvent = this.keyEvent.bind(this);
    }

    selectOption(option) {
        this.$scope.model = option;
        this.$scope.showOptions = false;
        this.$scope.filteredOptions = [];
    }

    autocomplete(search) {
        this.$scope.showOptions = false;
        this.$scope.filteredOptions = [];
        this.$scope.options.forEach((o) => {
            if (o.includes(search) && search) {
                this.$scope.filteredOptions.push({
                    value: o,
                    text: o.replace(search, '<em>' + search + '</em>')
                });
            }
        });
        if (this.$scope.filteredOptions.length > 0) {
            this.$scope.showOptions = true;
        }
    }

    keyEvent(e) {
        if (this.$scope.filteredOptions) {
            switch (e.keyCode) {
                case 38:
                    this.$scope.selected--;
                    if (this.$scope.selected < 0) {
                        this.$scope.selected = this.$scope.filteredOptions.length - 1;
                    }
                    break;
                case 40:
                    this.$scope.selected++;
                    if (this.$scope.selected >= this.$scope.filteredOptions.length) {
                        this.$scope.selected = 0;
                    }
                    break;
                case 13:
                    if (this.$scope.selected in this.$scope.filteredOptions) {
                        this.selectOption(this.$scope.filteredOptions[this.$scope.selected].value);
                    }
                    break;
            }
        }
    }
}

export default controller;
