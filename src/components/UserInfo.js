export class UserInfo {
    constructor({nameForm, jobForm}) {
        this._name = nameForm;
        this._job = jobForm;
    }

    getUserInfo() {
        this._nameInput = document.querySelector('.profile-edit-form__name');
        this._jobInput = document.querySelector('.profile-edit-form__job');
        this._nameInput.value = this._name.textContent;
        this._jobInput.value = this._job.textContent;
    }

    setUserInfo() {
        this._nameInput = document.querySelector('.profile-edit-form__name');
        this._jobInput = document.querySelector('.profile-edit-form__job');
        this._name.textContent = this._nameInput.value;
        this._job.textContent = this._jobInput.value;
    }
}