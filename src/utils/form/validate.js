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
}();
