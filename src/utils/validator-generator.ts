class ValidatorGenerator {
    private _required: boolean | undefined;
    private _requiredMessage: String | undefined;
    private _requiredTrigger: String = 'blur';
    public $t: (input: String) => String;

    // @ts-ignore
    constructor($t: Function<String>) {
        this.$t = $t;
    }

    static init($t: () => String): ValidatorGenerator {
        return new ValidatorGenerator($t);
    }

    required(message?: String, trigger?: boolean): this {
        this._required = true;
        let msg;
        if (message) {
            msg = this.$t(message)
        }
        this._requiredMessage = msg || this.$t('validation.required');
        return this;
    }


    exp(): Array<any> {
        const map = [];
        if (this._required) {
            map.push({required: true, message: this._requiredMessage, trigger: this._requiredTrigger})
        }
        return map;
    }
}

export {ValidatorGenerator};
