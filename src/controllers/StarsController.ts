import { Request, Response } from 'express';
import db from '../database/connection';

export default class StarsControllers {
  async index(request: Request, response: Response) {
    const classificacao = request.body;

    const repositorio = await db('repositories')
    .where('repositories.id_rep', '=', classificacao.id_rep)
    //.select('repositories.*')
    .leftJoin('rep_stars as stars', 'stars.id_rep', 'repositories.id_rep')
    .sum('stars.count_stars as Totalstars');

    return response.json(repositorio);
  }


  async create( request: Request, response: Response ) {
    const {
      count_stars,
      user_id,
      id_rep
    } = request.body;
    
    const trx = await db.transaction();

    try {
      const stars = await trx('rep_stars').insert({
        count_stars,
        user_id,
        id_rep
      });

      await trx.commit();
    
      return response.status(201).send();

    } catch (error) {
      await trx.rollback();
  
      return response.status(400).json({
        error: 'Erro não esperado na criação de uma nova classificação.'
      })
    }

  }
}