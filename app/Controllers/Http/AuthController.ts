import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import User from "../../Models/User";

export default class AuthController {
  public async register({ response, request, auth }: HttpContextContract) {
    const userSchema = schema.create({
      email: schema.string([rules.email(), rules.trim()]),
      password: schema.string([rules.minLength(8)]),
    });
    const data = await request.validate({ schema: userSchema });
    const user = await User.create(data);
    await auth.login(user);

    return response.redirect().toPath("/");
  }
  public async login({
    response,
    request,
    auth,
    session,
  }: HttpContextContract) {
    const { email, password } = request.only(["email", "password"]);

    try {
      await auth.attempt(email, password);
    } catch (_error) {
      session.flash("errors", "Email or password is incorrect");
      return response.redirect().back();
    }

    return response.redirect().toPath("/");
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout();
    return response.redirect().toPath("/");
  }
}
