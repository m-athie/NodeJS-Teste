import { Request, Response } from 'express';
import db from '../database/connection';

export default class UsersControllers {
  async index(request: Request, response: Response) {
    const login = request.body;

    const usuario = await db('users')
    .where('users.username', '=', login.username)
    .select('users.*')
    .leftJoin('followers as fls', 'fls.user_id', 'users.id')
    //.leftJoin('followers as fl', 'fl.seguidor_id', 'users.id')
    .count('fls.user_id as seguidores')
    //.count('fl.seguidor_id as seguindo');

    return response.json(usuario);
  }

  async create( request: Request, response: Response ) {
    const { 
      nome,
      email,
      localizacao,
      avatar,
      username,
      bio,
      nome_rep,
      description_rep,
      slug = nome+nome_rep
     } = request.body;
  
     const trx = await db.transaction();
    
    try {
      const insertedUsersIds = await trx('users').insert({
        nome,
        email,
        localizacao,
        avatar,
        username,
        bio
      });
    
      const user_id = insertedUsersIds[0];
    
      const insertedRepsIds = await trx('repositories').insert({
        nome_rep,
        description_rep,
        user_id,
        slug
      });
    
      const id_rep = insertedRepsIds[0];
    
      await trx.commit();
    
      return response.status(201).send();
  
    } catch (err) {
      await trx.rollback();
  
      return response.status(400).json({
        error: 'Erro não esperado na criação de uma novo usuário.'
      })
    }
  }
}