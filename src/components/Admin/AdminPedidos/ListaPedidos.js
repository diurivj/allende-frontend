import React from 'react';
import { List , Spin, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';


export const ListaPedidos = ({state, handleInfiniteOnLoad}) => {
  const {loading,hasMore,data} = state;
    return (
      <div className="lista-pedidos">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            dataSource={data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={<a href="/">{item.name.last}</a>}
                  description={item.email}
                />
                <div>
                  <span>Fecha:23/07/18 | Status : Entregado | </span>
                  <Button>Editar</Button> <span> | </span>
                  <Button>Eliminar</Button> 
                </div>
              </List.Item>
            )}
          >
            {loading && hasMore && (
              <div className="lista-pedidos-loading">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
