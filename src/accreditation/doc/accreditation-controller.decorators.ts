import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  accreditationSchemaExample,
  accreditationsSchemaExample,
} from './accreditation-example.schema';

export const accreditationDecorators = {
  create: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Create a new user event accreditation',
        description: 'With this endpoint, you can accreditate user on events',
      }),
      ApiCreatedResponse({
        description: 'Created a new accreditation sucessfully',
        schema: { example: accreditationSchemaExample },
      }),
      ApiNotFoundResponse({
        description: 'Not found given event id',
      }),
      ApiUnauthorizedResponse({
        description: 'Unauthorized',
      }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
      }),
      ApiBearerAuth(),
    ),

  findAll: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Get all user accredited events',
        description:
          'With this endpoint, you can see full list of accredited events by user',
      }),
      ApiOkResponse({
        description: 'Successfully found items',
        schema: {
          example: accreditationsSchemaExample,
        },
      }),
      ApiUnauthorizedResponse({
        description: 'Unauthorized',
      }),
      ApiInternalServerErrorResponse({
        description: 'Internal server error',
      }),
      ApiBearerAuth(),
    ),

  findByEvent: () =>
    applyDecorators(
      ApiOperation({
        summary: 'Check whether user has accredited on specific event',
        description:
          'With this endpoint you can check if a user has already accredited on specific event, whether a user are accredited, the event will be returned',
      }),
      ApiOkResponse({
        description: 'user already accredited on this event',
        schema: { example: [accreditationsSchemaExample[0]] },
      }),
      ApiNotFoundResponse({
        description: 'User has no accredited events with given ID',
      }),
      ApiUnauthorizedResponse({
        description: 'Unauthorized',
      }),
      ApiInternalServerErrorResponse({
        description: 'Internal server Error',
      }),
      ApiBearerAuth(),
    ),
};
