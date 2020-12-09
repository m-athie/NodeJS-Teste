import { Request, Response } from 'express';
import db from '../database/connection';

export default class FollowersControllers {
  async create( request: Request, response: Response ) {
    const {
      seguidor_id,
      user_id
    } = request.body;
    
    const trx = await db.transaction();

    try {
      const seguidores = await trx('followers').insert({
        seguidor_id,
        user_id
      });

      await trx.commit();
    
      return response.status(201).send();

    } catch (error) {
      await trx.rollback();
  
      return response.status(400).json({
        error: 'Erro não esperado na criação de um novo seguidor.'
      })
    }

  }
}