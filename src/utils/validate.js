/**
 * @desc 验证表单的集中处理
 * @export
 * @class Validate
 */
export default new class Validate {
  /**
   * @param {any} rule 验证规则
   * @param {any} value 电话号码
   * @param {any} callback 回调方法
   */
  validatePassword(rule, value, callback) {
    const minLength = 6;
    const maxLength = 12;

    if (value.length < minLength || value.length > maxLength) {
      callback(new Error('请输入6-12位密码'));
    } else {
      callback();
    }
  }
  validateEmail(rule, value, callback) {
    const reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;

    if (value !== '' && value != null && !reg.test(value)) {
      callback(new Error('请输入正确格式的邮箱'));
    } else {
      callback();
    }
  }
  validatePhone(rule, value, callback) {
    const reg = /^((((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8}))$/;

    if (value !== '' && value != null && !reg.test(value)) {
      callback(new Error('请输入正确的手机号'));
    } else {
      callback();
    }
  }
  isLimitPwdLength(password) {
    const pwdReg = /^[a-zA-Z0-9]{6,18}$/;

    return pwdReg.test(password);
  }
}();
